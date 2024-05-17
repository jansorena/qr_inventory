import prisma from "../lib/prisma.js";

export const registerParlante = async (req, res) => {
    const {id, tipo, nombre, marca, modelo, ubicacion, potencia, cantidadAltavoces, bluetooth} = req.body;
    
    try {
        const newEquipo = await prisma.parlante.create({
            data: {
                id,
                tipo,
                nombre,
                marca,
                modelo,
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

export const getEquipo = async (req, res) => {
    const { tipo, id_equipo } = req.params;
    
    try {
        let equipo;
        
        switch(tipo){
            case 'parlante':
                equipo = await prisma.parlante.findUnique({
                    where: { id: id_equipo }
                });
                break;
            case 'pc':
                equipo = await prisma.pc.findUnique({
                    where: { id: id_equipo }
                });
                break;
            case 'proyector':
                equipo = await prisma.pc.findUnique({
                    where: { id: id_equipo }
                });
                break;
            default:
                return res.status(400).json({ message: "Tipo de equipo no válido" });
        }

        if (!equipo) {
            return res.status(404).json({ message: "Equipo no encontrado" });
        }

        res.status(200).json(equipo);

    } catch (error) {
        console.error("Error al obtener el equipo:", error);
        res.status(500).json({ message: "Error al obtener el equipo" });
    }
};