import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    {/*
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    
    });
    */}

    const {id, tipo, nombre, marca, ubicacion, potencia, cantidadAltavoces, bluetooth} = req.body;
    try {
        const newEquipo = await prisma.equipoMusica.create({
            data: {
                id,
                tipo,
                nombre,
                marca,
                ubicacion,
                potencia,
                cantidadAltavoces,
                bluetooth
            }
        });
    
        res.status(201).json({message: "Equipo creado correctamente"});
    } catch (error) {
        res.status(500).json({message: "Error al crear el equipo"});
    }
   
}

export const login = (req, res) => {
    //db
}
export const logout = (req, res) => {
    //db
}
