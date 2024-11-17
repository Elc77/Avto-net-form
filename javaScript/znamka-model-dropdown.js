// Define models for each brand
const carModels = {
    Audi: ["A1", "A2", "A3", "S3", "RS3", "A4","S4","RS4","A5","S5","RS5", "A6", "S6", "RS6", "A7", "S7", "RS7","A8", "S8", "Q1","Q2","Q3","Q4", "Q5", "Q6", "Q7", "SQ7","Q8", "SQ8","RSQ8","R8"],
    BMW: ["X2", "X4", "X6", "X7", "1 Series", "2 Series", "4 Series", "5 Series", "7 Series", "8 Series", "M2", "M3", "M4", "M5", "M8", "Z4", "i3", "i4", "i8", "iX", "i7"],
    Citroen: ["C1", "C3", "C3 Aircross", "C4", "C4 Cactus", "C5", "C5 Aircross", "C6", "Berlingo", "Spacetourer", "Ami"],
    Ford: ["Fiesta", "Focus", "Mondeo", "Mustang", "Puma", "EcoSport", "Kuga", "Edge", "Explorer", "Galaxy", "S-Max", "Ranger", "Transit"],
    "Mercedes-Benz": ["A-Class", "B-Class", "S-Class", "CLA", "CLS", "GLB", "GLC", "GLS", "G-Class", "EQC", "EQB", "EQS", "AMG GT", "AMG A 35", "AMG GLE 53", "SLC"],
    Opel: ["Corsa", "Astra", "Insignia", "Mokka", "Crossland", "Grandland", "Zafira", "Combo", "Vivaro", "Movano"],
    Peugeot: ["208", "2008", "308", "3008", "408", "4008", "508", "5008", "Rifter", "Traveller", "Partner"],
    Renault: ["Clio", "Captur", "Megane", "Kadjar", "Koleos", "Talisman", "Scenic", "Espace", "Trafic", "Master", "Zoe"],
    Skoda: ["Fabia", "Scala", "Octavia", "Superb", "Kamiq", "Karoq", "Kodiaq", "Enyaq", "Citigo"],
    Volkswagen: ["Polo", "Golf", "Passat", "Arteon", "T-Cross", "T-Roc", "Tiguan", "Touareg", "Sharan", "Touran", "ID.3", "ID.4", "ID.5", "ID.Buzz"]
  };
  
  // Get references to the dropdown elements
  const znamkaDropdown = document.getElementById("znamka-dropdown");
  const modelDropdown = document.getElementById("model-dropdown");
  
  // Listen for changes in the "znamka" dropdown
  znamkaDropdown.addEventListener("change", function() {
    const selectedBrand = znamkaDropdown.value;
    
    // Clear existing model options
    modelDropdown.innerHTML = '<option value="Izberite model">Izberite model</option>';
    
    // If a valid brand is selected, populate the model dropdown
    if (selectedBrand && carModels[selectedBrand]) {
      carModels[selectedBrand].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelDropdown.appendChild(option);
      });
    }
  });