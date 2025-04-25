import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { toast } from "sonner";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

export const useRegister = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const register = async (displayName, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/micah/svg?seed=${displayName}`,
      });
      const user = req.user;
      dispatch(login(user));
      setData(user);
      toast.success(`Welcome ${displayName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { data, isPending, register };
};
