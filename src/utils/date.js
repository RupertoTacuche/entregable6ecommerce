export const formatDateDDMMYYYY =(oldFormat)=>{
const newDAte= new Date(oldFormat)
const options={
    year:"numeric",
    month:"numeric",
    day:"numeric"
}
return newDAte.toLocaleDateString("es-ES", options)

}