import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

interface UserDTO {
  email: string;
  password: string;
  password_confirm: string;
}

class CreateUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute({ email, password, password_confirm }: UserDTO): User | Error {
    if (password !== password_confirm) {
      throw new Error('The passwords do not match.');
    }

    const user = this.userRepository.create({ email, password });

    return user;
  }
}

export default CreateUserService;
