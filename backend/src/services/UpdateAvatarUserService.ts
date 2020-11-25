import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface AvatarProps {
  id: string;
  avatar: string;
}

class UpdateUserAvatarService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute({ id, avatar }: AvatarProps): User {
    const user = this.userRepository.setAvatar({ id, avatar });
    return user;
  }
}

export default UpdateUserAvatarService;
