let currentStep = 1;
let selectedCountry = "";
let selectedCurrency = "KES";
let selectedAsset = "";
let depositAmount = 0;

function selectCountry(country, currency) {
    selectedCountry = country;
    selectedCurrency = currency;
    moveStep(1);
}

function selectProduct(assetName, price, depositPercent) {
    selectedAsset = assetName;
    depositAmount = (price * (depositPercent / 100));
    
    document.getElementById('summary-asset').innerText = assetName;
    document.getElementById('summary-deposit').innerText = `${selectedCurrency} ${depositAmount.toLocaleString()}`;
    moveStep(1);
}

function moveStep(direction) {
    document.getElementById(`step-${currentStep}`).classList.remove('active-step');
    
    if(direction === 1) {
        document.getElementById(`node-${currentStep}`).classList.remove('active');
        document.getElementById(`node-${currentStep}`).classList.add('completed');
        if (currentStep < 5) document.getElementById(`line-${currentStep}`).classList.add('completed');
    }

    currentStep += direction;

    document.getElementById(`step-${currentStep}`).classList.add('active-step');
    document.getElementById(`node-${currentStep}`).classList.add('active');

    document.getElementById('btn-prev').disabled = currentStep === 1;
    if (currentStep === 5 || currentStep === 4) {
        document.getElementById('btn-next').style.display = 'none';
    } else {
        document.getElementById('btn-next').style.display = 'block';
    }
}

function triggerPesaPal() {
    const walletNum = document.getElementById('wallet-number').value;
    if(!walletNum) {
        alert("Wallet reference targets must be supplied to execute down payments via PesaPal API endpoints.");
        return;
    }
    moveStep(1);
}
