import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "user",
    timestamps: true,
    paranoid: true
})
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    uid: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    upw: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nickName: string;
}