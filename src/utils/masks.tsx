export const formatCpf = v => {
    return v.replace(/\D/g, '')
       .replace(/(\d{3})(\d)/, '$1.$2')
       .replace(/(\d{3})(\d)/, '$1.$2')
       .replace(/(\d{3})(\d{1,2})/, '$1-$2')
       .replace(/(-\d{2})\d+?$/, '$1')
}

export const formatDate = v =>{
   return v.replace(/\D/g, '')
   .replace(/(\d{2})(\d)/, '$1/$2')
   .replace(/(\d{2})(\d)/, '$1/$2')
   .replace(/(\d{4})\d+?$/, '$1')
}

export const convertDate = date =>{
   const d = date.replace(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/, "$3-$2-$1")
   //return new Date(date.replace(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/, "$2/$1/$3")).toISOString()
   return d
}