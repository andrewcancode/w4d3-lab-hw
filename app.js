console.log('JS connected!');

// grabbed example from API doc.. 

// $.ajax({
//     url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=Agency,Descriptor,Borough,resolution_description",
//     type: "GET",
//     data: {
//         "Agency" : "NYPD",
//         "Borough" : "MANHATTAN",
//         "$limit" : 5000,
//         "$$app_token" : "6teGW3hWN2owPghownKMP5jmQ"
//     }
// }).then(
//     (data) => {
//         // alert("Retrieved " + data.length + " records from the dataset!");
//         console.log(data);
// },
//     () => {
//         console.log('failed');
//     }
// );

// let $numResults; // grab value of textbox

// if ($('input[type="text"]').val() === '') {
//     $numResults = 10;
// } else {
//     $numResults = $('input[type="text"]').val();
// }

// console.log($('input[type="text"]').val())
// console.log($numResults);

$(() => {
    $('#btnManhattan').on('click', (event) => { // this is so we dont run the code until the form is submitted
        event.preventDefault(); // prevents default behavior of page refresh
        // let $userInput = $('input[type="text"]').val(); // grab value of textbox
        // console.log($userInput);

        let $numResults; // grab value of textbox

        if ($('input[type="text"]').val() === '') {
            $numResults = 10;
        } else {
            $numResults = $('input[type="text"]').val();
        }
    
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=Agency,Descriptor,Borough,resolution_description,unique_key",
            type: "GET",
            data: {
                "Agency" : "NYPD",
                "Borough" : "MANHATTAN",
                "$limit" : $numResults,
                "$$app_token" : "6teGW3hWN2owPghownKMP5jmQ"
            }
        }).then(
            (data) => {
                // alert("Retrieved " + data.length + " records from the dataset!");
                // console.log(data);
                $('#descriptor').empty();
                $('#resolutionInfo').empty();
                for (i = 0; i < $numResults; i++) {
                    let $uniqueKey = data[i].unique_key;
                    const $descriptor = $('<div>').text(data[i].Descriptor);
                    const $resolutionBtn = $('<input type="submit" value="Resolution" id="resolution" />');
                    $('#descriptor').append($descriptor);
                    $descriptor.append($resolutionBtn);

                    const $resolutionDescription = data[i].resolution_description;

                    $($resolutionBtn).on('click', (event) => {
                        // event.preventDefault();

                        // console.log($uniqueKey)
                        $('#resolutionInfo').text($resolutionDescription);
                    })

                    // $('#descriptor').append(data[i].Descriptor + '   ' + '<input type="submit" value="Resolution" id=' + $uniqueKey + '" />' + '<br>');
                }
                // $('#descriptor').html(data[0].Descriptor);
                // $('#resolution').html(data[0].resolution_description);
        },
            () => {
                console.log('failed');
            }
        );
    })

    $('#btnBrooklyn').on('click', (event) => { // this is so we dont run the code until the form is submitted
        event.preventDefault(); // prevents default behavior of page refresh
        // let $userInput = $('input[type="text"]').val(); // grab value of textbox
        // console.log($userInput);

        let $numResults; // grab value of textbox

        if ($('input[type="text"]').val() === '') {
            $numResults = 10;
        } else {
            $numResults = $('input[type="text"]').val();
        }
    
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=Agency,Descriptor,Borough,resolution_description,unique_key",
            type: "GET",
            data: {
                "Agency" : "NYPD",
                "Borough" : "BROOKLYN",
                "$limit" : $numResults,
                "$$app_token" : "6teGW3hWN2owPghownKMP5jmQ"
            }
        }).then(
            (data) => {
                // alert("Retrieved " + data.length + " records from the dataset!");
                // console.log(data);
                $('#descriptor').empty();
                $('#resolutionInfo').empty();
                for (i = 0; i < $numResults; i++) {
                    let $uniqueKey = data[i].unique_key;
                    const $descriptor = $('<div>').text(data[i].Descriptor);
                    const $resolutionBtn = $('<input type="submit" value="Resolution" id="resolution" />');
                    $('#descriptor').append($descriptor);
                    $descriptor.append($resolutionBtn);

                    const $resolutionDescription = data[i].resolution_description;

                    $($resolutionBtn).on('click', (event) => {
                        // event.preventDefault();

                        // console.log($uniqueKey)
                        $('#resolutionInfo').text($resolutionDescription);
                    })

                    // $('#descriptor').append(data[i].Descriptor + '   ' + '<input type="submit" value="Resolution" id=' + $uniqueKey + '" />' + '<br>');
                }
                // $('#descriptor').html(data[0].Descriptor);
                // $('#resolution').html(data[0].resolution_description);
        },
            () => {
                console.log('failed');
            }
        );
    })

    $('#btnQueens').on('click', (event) => { // this is so we dont run the code until the form is submitted
        event.preventDefault(); // prevents default behavior of page refresh
        // let $userInput = $('input[type="text"]').val(); // grab value of textbox
        // console.log($userInput);
        let $numResults; // grab value of textbox

        if ($('input[type="text"]').val() === '') {
            $numResults = 10;
        } else {
            $numResults = $('input[type="text"]').val();
}
    
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=Agency,Descriptor,Borough,resolution_description,unique_key",
            type: "GET",
            data: {
                "Agency" : "NYPD",
                "Borough" : "QUEENS",
                "$limit" : $numResults,
                "$$app_token" : "6teGW3hWN2owPghownKMP5jmQ"
            }
        }).then(
            (data) => {
                // alert("Retrieved " + data.length + " records from the dataset!");
                // console.log(data);
                $('#descriptor').empty();
                $('#resolutionInfo').empty();
                for (i = 0; i < $numResults; i++) {
                    let $uniqueKey = data[i].unique_key;
                    const $descriptor = $('<div>').text(data[i].Descriptor);
                    const $resolutionBtn = $('<input type="submit" value="Resolution" id="resolution" />');
                    $('#descriptor').append($descriptor);
                    $descriptor.append($resolutionBtn);

                    const $resolutionDescription = data[i].resolution_description;

                    $($resolutionBtn).on('click', (event) => {
                        // event.preventDefault();

                        // console.log($uniqueKey)
                        $('#resolutionInfo').text($resolutionDescription);
                    })

                    // $('#descriptor').append(data[i].Descriptor + '   ' + '<input type="submit" value="Resolution" id=' + $uniqueKey + '" />' + '<br>');
                }
                // $('#descriptor').html(data[0].Descriptor);
                // $('#resolution').html(data[0].resolution_description);
        },
            () => {
                console.log('failed');
            }
        );
    })

    $('#btnSI').on('click', (event) => { // this is so we dont run the code until the form is submitted
        event.preventDefault(); // prevents default behavior of page refresh
        // let $userInput = $('input[type="text"]').val(); // grab value of textbox
        // console.log($userInput);
        let $numResults; // grab value of textbox

        if ($('input[type="text"]').val() === '') {
            $numResults = 10;
        } else {
            $numResults = $('input[type="text"]').val();
        }
    
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=Agency,Descriptor,Borough,resolution_description,unique_key",
            type: "GET",
            data: {
                "Agency" : "NYPD",
                "Borough" : "STATEN ISLAND",
                "$limit" : $numResults,
                "$$app_token" : "6teGW3hWN2owPghownKMP5jmQ"
            }
        }).then(
            (data) => {
                // alert("Retrieved " + data.length + " records from the dataset!");
                // console.log(data);
                $('#descriptor').empty();
                $('#resolutionInfo').empty();
                for (i = 0; i < $numResults; i++) {
                    let $uniqueKey = data[i].unique_key;
                    const $descriptor = $('<div>').text(data[i].Descriptor);
                    const $resolutionBtn = $('<input type="submit" value="Resolution" id="resolution" />');
                    $('#descriptor').append($descriptor);
                    $descriptor.append($resolutionBtn);

                    const $resolutionDescription = data[i].resolution_description;

                    $($resolutionBtn).on('click', (event) => {
                        // event.preventDefault();

                        // console.log($uniqueKey)
                        $('#resolutionInfo').text($resolutionDescription);
                    })

                    // $('#descriptor').append(data[i].Descriptor + '   ' + '<input type="submit" value="Resolution" id=' + $uniqueKey + '" />' + '<br>');
                }
                // $('#descriptor').html(data[0].Descriptor);
                // $('#resolution').html(data[0].resolution_description);
        },
            () => {
                console.log('failed');
            }
        );
    })

    $('#btnBronx').on('click', (event) => { // this is so we dont run the code until the form is submitted
        event.preventDefault(); // prevents default behavior of page refresh
        // let $userInput = $('input[type="text"]').val(); // grab value of textbox
        // console.log($userInput);

        let $numResults; // grab value of textbox

        if ($('input[type="text"]').val() === '') {
            $numResults = 10;
        } else {
            $numResults = $('input[type="text"]').val();
}
    
        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=Agency,Descriptor,Borough,resolution_description,unique_key",
            type: "GET",
            data: {
                "Agency" : "NYPD",
                "Borough" : "BRONX",
                "$limit" : $numResults,
                "$$app_token" : "6teGW3hWN2owPghownKMP5jmQ"
            }
        }).then(
            (data) => {
                // alert("Retrieved " + data.length + " records from the dataset!");
                // console.log(data);
                $('#descriptor').empty();
                $('#resolutionInfo').empty();
                for (i = 0; i < $numResults; i++) {
                    let $uniqueKey = data[i].unique_key;
                    const $descriptor = $('<div>').text(data[i].Descriptor);
                    const $resolutionBtn = $('<input type="submit" value="Resolution" id="resolution" />');
                    $('#descriptor').append($descriptor);
                    $descriptor.append($resolutionBtn);

                    const $resolutionDescription = data[i].resolution_description;

                    $($resolutionBtn).on('click', (event) => {
                        // event.preventDefault();

                        // console.log($uniqueKey)
                        $('#resolutionInfo').text($resolutionDescription);
                    })

                    // $('#descriptor').append(data[i].Descriptor + '   ' + '<input type="submit" value="Resolution" id=' + $uniqueKey + '" />' + '<br>');
                }
                // $('#descriptor').html(data[0].Descriptor);
                // $('#resolution').html(data[0].resolution_description);
        },
            () => {
                console.log('failed');
            }
        );
    })
})
