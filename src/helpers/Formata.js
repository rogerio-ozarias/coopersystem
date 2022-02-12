export const formatNumber = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };

  export const valorDB = (valor) => {
    let valorString = valor.toString();
    valorString = valorString.replace(/\./g, "");
    valorString = valorString.replace(/\,/g, ".");
    valorString = valorString.replace(/[^\.0-9]/g,'');    
    let valorNumerico = parseFloat(valorString);   
    return parseFloat(valorNumerico);
  };

  export const valorBR = (valor) => {    
    return valor ? formatNumber(valorDB(valor), 2, ",", ".") : valor;
  };