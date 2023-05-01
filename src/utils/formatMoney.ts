const {format} = new Intl.NumberFormat(
  "pt-BR", 
  {
    style: "currency", 
    currency: "BRL"
  }
);
function formatMoneyToBRL(price: number){
  return format(price).slice(3);
}

export { formatMoneyToBRL };