// var black_score = 0;
// var white_score = 0;

class ScoreNPieces {
  constructor() {
    this.pawns = 8;
    this.knights = 2;
    this.rooks = 2;
    this.bishops = 2;
    this.queen = 1;
    this.kill_points = 0;
  }

  display_pieces() {
    console.log("Pawns: " + this.pawns);
    console.log("Knights: " + this.knights);
    console.log("Rooks: " + this.rooks);
    console.log("Bishops: " + this.queen);
  }

  remove_pawns() {
    if (this.pawns > 0) {
      --this.pawns;
      this.kill_points += 1;
    }
  }

  remove_knights() {
    if (this.knights > 0) {
      --this.knights;
      this.kill_points += 3;
    }
  }

  remove_rooks() {
    if (this.rooks > 0) {
      --this.rooks;
      this.kill_points += 5;
    }
  }
  remove_bishops() {
    if (this.bishops > 0) {
      --this.bishop;
      this.kill_points += 3;
    }
  }

  remove_queen() {
    if (this.queen > 0) {
      --this.queen;
      this.kill_points += 9;
    }
  }

  display_score() {
    console.log(this.kill_points);
  }
}

var black = new ScoreNPieces();

var white = new ScoreNPieces();

// black.score += 1;
// black.score += 3;
// black.score += 5;
// black.score += 3;
// black.score += 9;

// $("#white_pawn").click();

$("#white_pawn").click(log_and_remove=>{
    white.remove_pawns();
    $("#black_score_text").val(white.kill_points);
});

$("#white_knight").click(log_and_remove=>{
    white.remove_knights();
    $("#black_score_text").val(white.kill_points);
    
});
$("#white_rook").click(log_and_remove=>{
    white.remove_rooks();
    $("#black_score_text").val(white.kill_points);
    
});
$("#white_bishop").click(log_and_remove=>{
    white.remove_bishops();
    $("#black_score_text").val(white.kill_points);
    
});
$("#white_queen").click(log_and_remove=>{
    white.remove_queen();
    $("#black_score_text").val(white.kill_points);
});


$("#black_pawn").click(log_and_remove=>{
    black.remove_pawns();
    $("#white_score_text").val(black.kill_points);
});
$("#black_knight").click(log_and_remove=>{
    black.remove_knights();
    $("#white_score_text").val(black.kill_points);
});
$("#black_rook").click(log_and_remove=>{
    black.remove_rooks();
    $("#white_score_text").val(black.kill_points);
})
$("#black_bishop").click(log_and_remove=>{
    black.remove_bishops();
    $("#white_score_text").val(black.kill_points);
})
$("#black_queen").click(log_and_remove=>{
    black.remove_queen();
    $("#white_score_text").val(black.kill_points);
})
// let name = prompt("Enter ur name ");

// let condition = false;

// do
// {
//     let choice = prompt("Enter your choice");
//     if(choice == 1){
//         $("#black_pawn").click(black.remove_pawns());
//     }
//     else if(choice == 2){
//         $("#black_knight").click(black.remove_knights());
//     }
//     else if(choice == 3){
//         $("#black_rook").click(black.remove_rooks());
//     }
//     else if(choice == 4){
//         $("#black_bishop").click(black.remove_bishops());
//     }
//     else if(choice == 5){
//         $("#black_queen").click(black.remove_queen());
//     }

//     else if(choice == 6){
//         $("#white_pawn").click(white.remove_pawns());
//     }
//     else if(choice == 7){
//         $("#white_knight").click(white.remove_knights());
//     }
//     else if(choice == 8){
//         $("#white_rook").click(white.remove_rooks());
//     }
//     else if(choice == 9){
//         $("#white_bishop").click(white.remove_bishops());
//     }
//     else if(choice == 10){
//         $("#white_queen").click(white.remove_queen());
//     }
//     else if(choice == 11){
//         alert("Black points " + white.kill_points);
//     }
//     else if(choice == 12){
//         alert("White points " + black.kill_points);
//     }
//     else if(choice == 13){
//         condition = true;
//         alert("Ok");
//     }
//     else{
//         alert("Invalid choice:");
//     }
// }while(condition == false);
