//Simple callback

function createElement(data) {
	const paragraph = document.createElement('p');
	const textNode = document.createTextNode(data);
	paragraph.appendChild(textNode);
	document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const page = response.query.pages;
            const pageId = Object.keys(page)[0];
            const extract = page[pageId].extract;

            callback(extract);
        }
    };

    xhr.send(null);
}

// Appel de queryWikipedia avec createElement comme callback
queryWikipedia(createElement);

