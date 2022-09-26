Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/Qpf7yBuseKFFyg4TXSDjyWWqBISFyt

Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/jnNDFwlllO1m5Z7FERDH4luGwvOZ5r

Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone
322-22-22 https://monosnap.com/file/TZMbhXbodhFT7BpZywdhWXZxqRBgTr

Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/qTY4qGxixC8VowK1r7pX620daqOwRv
