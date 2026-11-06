import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';
import { Shop } from './shop.js';

const mysqlConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop"
})



@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  async GetShop() {
    const [result] = await mysqlConnection.execute(
      "SELECT id, product, customerName, billingAddress, shippingAdress FROM shop"
    );
    const rows = result as Shop[];
    return rows;
  }

  async ujRendeles(product: string,
    customerName: string,
    billingAddress: string,
    shippingAddress: string) {
      const [result] = await mysqlConnection.execute(
        "INSERT INTO shop(product, customerName, billingAddress, shippingAddress) VALUES(?,?,?,?)",
        [product, customerName, billingAddress, shippingAddress]
      );
      const rows = result as any;
      return{
        id:rows.insertId,
        product, customerName, billingAddress, shippingAddress
      } as Shop
  }




}
