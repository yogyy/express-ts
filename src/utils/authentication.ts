import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication {
  public static passHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static comparePass = async (
    text: string,
    encryptedText: string
  ): Promise<boolean> => {
    let res = await bcrypt.compare(text, encryptedText);

    return res;
  };

  public static generateToken = (
    id: number,
    username: string,
    password: string
  ) => {
    const secretKey = process.env.jwt_secret || "secret banget";
    const token: string = jwt.sign({ id, username, password }, secretKey);

    return token;
  };
}

export default Authentication;
