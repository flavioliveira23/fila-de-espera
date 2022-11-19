
const patients = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Boromir"];


for (index = 1; index < patients.length; index++) {
  const element = patients[index];
  var patientsInOrder = (index + "º " + element);
  console.log(patientsInOrder);
}

function register() {
   var newName = prompt("Digite o nome do paciente:");
   
   patients.push(newName);
}

function start() {
   var value = prompt("Digite 1 para Cadastrar paciente\nDigite 2 para Consultar paciente\nDigite 3 se deseja Sair");
   
   switch (value) {
    case "1":
        var newName = prompt("Digite o nome do paciente:");
   
        patients.push(newName);
        console.clear();

        for (index = 1; index < patients.length; index++) {
            const element = patients[index];
            var patientsInOrder = (index + "º " + element);
            console.log(patientsInOrder);
          }
        break
    case "2":
        var removed = patients.shift(patients[0]);
        
        console.clear();
        alert(removed + " Está em consulta!");
        console.log("Lista Atualizada!\n\n");

        for (index = 1; index < patients.length; index++) {
            const element = patients[index];
            var patientsInOrder = (index + "º " + element);
            console.log(patientsInOrder);
          }
        break
    case "3":
        alert("Finalizando...");
   }

}


