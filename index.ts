import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your firstnumber", type: "number", name: "firstnumber" },
  {
    message: "Enter your secondnumber",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "select one of operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
  // conditional statement
if(answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}
else if(answer.operator === "Subtraction")
{console.log(answer.firstnumber - answer.secondnumber);
}else if(answer.operator === "Multiplication"){
console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operator === "Division"){
console.log(answer.firstnumber / answer.secondnumber);
}
else{"please select correct operator"}


