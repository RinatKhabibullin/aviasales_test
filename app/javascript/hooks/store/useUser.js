import { useSelector, useDispatch } from 'react-redux';
import { setUser } from 'slices/UserSlice';

const useUser = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const loadUser = (loadedUser) => {
    dispatch(setUser(loadedUser));
  };

  return {
    user,
    loadUser,
  };
};

export default useUser;
