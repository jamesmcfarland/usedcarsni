const manufacturers = [
  "Abarth",
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "BMW",
  "Renault",
  "Bentley",
  "Buick",
  "Citroen",
  "Chevrolet",
  "Chrysler",
  "Dacia",
  "DS",
  "Daihatsu",
  "Dodge",
  "Eagle",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Freighliner",
  "Genesis",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infinity",
  "Isuzu",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Mazda",
  "Maserati",
  "Maybach",
  "McLaren",
  "MG",
  "Mercedes-Benz",
  "Mercedes",
  "Mercury",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Oldsmobile",
  "Peugeot",
  "Plymouth",
  "Polestar",
  "Pontiac",
  "Porsche",
  "Ram",
  "Rivian",
  "Rolls_Royce",
  "Saab",
  "Suzuki",
  "Seat",
  "Smart",
  "Ssangyong",
  "Subaru",
  "Susuki",
  "Skoda",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "VW",
  "Volvo",
  "Vauxhall",
];

const getManufacturerModelAndYearFromTitle = (title) => {
  for (let i = 0; i < manufacturers.length; i++) {
    const manufacturer = manufacturers[i];
    const res = title.toLowerCase().search(manufacturer.toLowerCase());
    if (res !== -1) {
      let model = title.substring(res).split(" ");
      model = model[1];
      let year = title.substring(0, res);
      year = year.replace(/\D/g,'');

      return [manufacturer, model, year];
    }
  }
  return "Unknown";
};

module.exports = {
    getManufacturerModelAndYearFromTitle,
};
