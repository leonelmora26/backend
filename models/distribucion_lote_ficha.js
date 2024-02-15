import mongoose from "mongoose";

const Distribucion_lote_ficha = new mongoose.Schema(
    {
        presupuesto: {type: String, require:true},
        ficha: {type:mongoose.Schema.Types.ObjectId, ref:'ficha', require:true},
        iddistribucion_presupuesto: {type:mongoose.Schema.Types.ObjectId, ref:'distribucion_presupuesto', require:true},
        estado : { type: Boolean, default:1}
    }
)

export default mongoose.model("Distribucion_lote_ficha", Distribucion_lote_ficha)