function genotype(){
	// define variables
	let y = document.querySelector(".male");
	let x = document.querySelector(".female");
	let submit = document.querySelector(".submit");
	let male = document.querySelector(".m");
	let female = document.querySelector(".f");
	let remark = document.querySelector(".remark");
	let summary = document.querySelector(".summary");

// 		// add event listener to the submit button
		submit.addEventListener("click", moses)
		function moses(e){
			e.preventDefault();

let maleInput = y.value.toUpperCase();
let femaleInput = x.value.toUpperCase();

			


// Result-----32 
		//AA + AA
			if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AA"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";
		
		// AS + AA
			}else if(y.value.toUpperCase() =="AS" && x.value.toUpperCase() == "AA"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		// AA + AS
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		// AC + AA
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AA"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		// AA + AC
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		// AS + AS
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "AS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		// AC + AC
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AA + SS 
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "SS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SS + AA
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AA"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AA + CC 
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "CC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//CC + AA
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AA"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SS + SS
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "SS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//CC + CC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "CC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SS + AC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AC + SS
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "SS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";
				
				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AS + SS 
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "SS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SS + AS
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";


		//SS + CC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "CC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//CC + SS
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "SS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AC + AS
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AS + AC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "AC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AC + CC
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "CC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//CC + AC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//CC + SC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "SC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SC + CC
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "CC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AS + SC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "SC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SC + AS
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "AS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SC + SS
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "SS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//SS + SC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "SC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//AS + CC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "CC"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

		//CC + AS
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AS"){
				male.innerText = maleInput;
				male.style.color = "black";
				maleInput= " ";

				female.innerText = femaleInput;
				female.style.color = "black";
				femaleInput = " ";

			}else{
				male.innerText = "";
				
				female.innerText = "";
				
			}
			



// Remark---32,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
		
		// AA + AA
			if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AA"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";
		// AS + AA
			}else if(y.value.toUpperCase() =="AS" && x.value.toUpperCase() == "AA"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// AA + AS
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AS"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// AC + AA
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AA"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// AA + AC
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AC"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// AS + AS
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "AS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";
		
		// AC + AC
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// AA + SS
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "SS"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// SS + AA
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AA"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// SS + SS
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "SS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SS + AC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// AC + SS
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "SS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// AS + SS
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "SS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SS + AS
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// CC + CC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "CC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SS + CC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "CC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// CC + SS
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "SS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// CC + AS
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// AS + CC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "CC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// CC + AC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// AC + CC
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "CC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// CC + AA
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AA"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";

		// AA + CC
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "CC"){
				remark.innerText = "Congratulations!!!....Your genotype are compatible, hence you can Marry.";
				remark.style.color = "green";


		// AC + AS
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// AS + AC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "AC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";


		// CC + SC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "SC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SC + CC
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "CC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";


		// AS + SC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "SC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SC + AS
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "AS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SC + SS
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "SS"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

		// SS + SC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "SC"){
				remark.innerText = "Oops!!!....Your genotype are not compatible, hence you cannot Marry.";
				remark.style.color = "red";

			}else{
				remark.innerText = "Not Valid";
				remark.style.color = "red";
			}





// summary...32,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

		// AA + AA
			if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AA"){
				summary.innerText = "100% of your Children would be AA.";
				summary.style.color = "green";
		
		// AS + AA
			}else if(y.value.toUpperCase() =="AS" && x.value.toUpperCase() == "AA"){
				summary.innerText = "50% of your Children would be AA and the other 50% would be AS.";
				summary.style.color = "green";

		// AA + AS
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AS"){
				summary.innerText = "50% of your Children would be AA and the other 50% would be AS.";
				summary.style.color = "green";


		// AC + AA
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AA"){
				summary.innerText = "50% of your Children would be AA and the other 50% would be AC.";
				summary.style.color = "green";

		// AA + AC
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "AC"){
				summary.innerText = "50% of your Children would be AA and the other 50% would be AC.";
				summary.style.color = "green";

		// AS + AS
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "AS"){
				summary.innerText = "25% of your Children would be AA, 25% would be SS and 50% would be AS.";
				summary.style.color = "red";

		// AC + AC
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AC"){
				summary.innerText = "25% of your Children would be AA, 25% would be CC and 50% would be AC.";
				remark.style.color = "red";

		// AA + SS
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "SS"){
				summary.innerText = "100% of your Children would be AS.";
				summary.style.color = "green";

		// SS + AA
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AA"){
				summary.innerText = "100% of your Children would be AS.";
				summary.style.color = "green";

		// SS + SS
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "SS"){
				summary.innerText = "100% of your Children would be SS.";
				summary.style.color = "red";

		// CC + CC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "CC"){
				summary.innerText = "100% of your Children would be CC.";
				summary.style.color = "red";

		// CC + SS
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "SS"){
				summary.innerText = "100% of your Children would be SC.";
				summary.style.color = "red";

		// SS + CC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "CC"){
				summary.innerText = "100% of your Children would be SC.";
				summary.style.color = "red";

		// SS + AC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AC"){
				summary.innerText = "50% of your Children would be AS and the other 50% would be SC.";
				summary.style.color = "red";

		// AC + SS
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "SS"){
				summary.innerText = "50% of your Children would be AS and the other 50% would be SC.";
				summary.style.color = "red";

		// AS + SS
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "SS"){
				summary.innerText = "50% of your Children would be AS and the other 50% would be SS.";
				summary.style.color = "red";

		// SS + AS
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "AS"){
				summary.innerText = "50% of your Children would be AS and the other 50% would be SS.";
				summary.style.color = "red";

		// CC + AC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AC"){
				summary.innerText = "50% of your Children would be AC and the other 50% would be CC.";
				summary.style.color = "red";

		// AC + CC
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "CC"){
				summary.innerText = "50% of your Children would be AC and the other 50% would be CC.";
				summary.style.color = "red";

		// AS + CC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "CC"){
				summary.innerText = "50% of your Children would be AC and the other 50% would be SC.";
				summary.style.color = "red";

		// CC + AS
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AS"){
				summary.innerText = "50% of your Children would be AC and the other 50% would be SC.";
				summary.style.color = "red";


		// CC + AA
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "AA"){
				summary.innerText = "100% of your Children would be AC.";
				summary.style.color = "green";

		// AA + CC
			}else if(y.value.toUpperCase() == "AA" && x.value.toUpperCase() == "CC"){
				summary.innerText = "100% of your Children would be AC.";
				summary.style.color = "green";


		// AC + AS
			}else if(y.value.toUpperCase() == "AC" && x.value.toUpperCase() == "AS"){
				summary.innerText = "25% of your Children would be AA, 25% would be AS, 25% would be AC and the other 25% would SC.";
				summary.style.color = "red";

		// AS + AC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "AC"){
				summary.innerText = "25% of your Children would be AA, 25% would be AS, 25% would be AC and the other 25% would SC.";
				summary.style.color = "red";

		// CC + SC
			}else if(y.value.toUpperCase() == "CC" && x.value.toUpperCase() == "SC"){
				summary.innerText = "50% of your Children would be SC and the other 50% would be CC.";
				summary.style.color = "red";

		// SC + CC
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "CC"){
				summary.innerText = "50% of your Children would be SC and the other 50% would be CC.";
				summary.style.color = "red";


		// AS + SC
			}else if(y.value.toUpperCase() == "AS" && x.value.toUpperCase() == "SC"){
				summary.innerText = "25% of your Children would be As, 25% would be Ac, 25% would be ss and the other 25% would SC.";
				summary.style.color = "red";

		// SC + AS
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "AS"){
				summary.innerText = "25% of your Children would be As, 25% would be Ac, 25% would be ss and the other 25% would SC.";
				summary.style.color = "red";


		// SC + SS
			}else if(y.value.toUpperCase() == "SC" && x.value.toUpperCase() == "SS"){
				summary.innerText = "50% of your Children would be SS and the other 50% would be SC.";
				summary.style.color = "red";

		// SS + SC
			}else if(y.value.toUpperCase() == "SS" && x.value.toUpperCase() == "SC"){
				summary.innerText = "50% of your Children would be SS and the other 50% would be SC.";
				summary.style.color = "red";

			}else{
				summary.innerText = " ";
			}
			
			
		}	

}
genotype();

const arr = ["apple", "mango", "cashew", "orange", "apple", "cashew"]
