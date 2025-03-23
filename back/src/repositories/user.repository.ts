import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export class UsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = AppDataSource.getRepository(User); // Al inicializar la clase, guardamos el repository de User
  }
  async findOneIdUser(id: string) {
    return await this.repository.findOne({
      where: { id },
      relations: ["credentials", "appointments"],
    });
  }

  async guardar(data: any) {
    return await this.repository.save(data);
  }
}
