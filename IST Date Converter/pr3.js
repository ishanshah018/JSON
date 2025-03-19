function f1() {
    let input_date = document.getElementById("dt1").value;
    let a = { date: input_date };
    var dt = new Date(a.date);
    alert(dt);
}