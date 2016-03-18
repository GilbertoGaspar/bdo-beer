/**
 * Created by PC on 3/17/2016.
 */
function calculate() {
    var wheatInput = document.getElementById("txtWheatInput");
    var wheatOutput = document.getElementById("txtWheatOutput");
    var mineralOutput = document.getElementById("txtMineralOutput");
    var sugarOutput = document.getElementById("txtSugarOutput");
    var agentOutput = document.getElementById("txtAgentOutput");
    var wheat = Math.floor(wheatInput.value / 5) * 5;
    wheatOutput.value = wheat;
    mineralOutput.value = wheat * 6;
    sugarOutput.value = wheat/5;
    agentOutput.value = wheat/2;
}
