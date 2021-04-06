function(input) {
    var ddmmyyyy = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    var mmddyyyy = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (input.match(ddmmyyyy) || input.match(mmddyyyy)) {
        console.log("Valid");
    }
    else {
        console.log("Please enter dd/mm/yyyy");
    }
};