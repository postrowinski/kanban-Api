var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '1939',
    'X-Auth-Token': '6c3bdf48fb786d1edd3bac6aa2b198af'
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl,
    method: 'GET',
    success: function (response) {
        setupColumns(response.columns);
    }
});

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(card);
    })
}

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);

        board.createColumn(col);
        setupCards(col, column.cards);
    });
}
