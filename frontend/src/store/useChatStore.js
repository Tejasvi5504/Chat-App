import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
// Removed unused imports (Subscript, Users, use) to clean up bundle
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  // we keep a reference to the active socket message listener to remove it later
  _messageListener: null,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  //todo :optimize for later
  setSelectedUser: (selectedUser) => set({ selectedUser }),

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  },
  subscribeToMessages: () => {
    const { selectedUser, _messageListener } = get();
    if (!selectedUser) return;
    const socket = useAuthStore.getState().socket;
    // Avoid registering multiple listeners
    if (_messageListener) {
      socket.off("new-message", _messageListener);
    }
    const listener = (newMessage) => {
      // Only append if the message belongs to current conversation
      if (
        newMessage.senderId === selectedUser._id ||
        newMessage.receiverId === selectedUser._id
      ) {
        set({ messages: [...get().messages, newMessage] });
      }
    };
    socket.on("new-message", listener);
    set({ _messageListener: listener });
  },
  clearMessages: () => {
    const { _messageListener } = get();
    const socket = useAuthStore.getState().socket;
    if (_messageListener) {
      socket.off("new-message", _messageListener);
      set({ _messageListener: null });
    }
  },
}));
