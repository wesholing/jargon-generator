/*jslint browser: true*/
/*jslint bitwise: true*/
/*global $, jQuery, alert, console*/

$(document).ready(function () {
    "use strict";

    var structures = 3,
        singularNouns = ["noun", "noun", "noun"], // FILL IN: add your singular nouns
        pluralNouns = ["nouns", "nouns", "nouns"], // FILL IN: add your plural nouns
        verbs = ["verb", "verb", "verb"], // FILL IN: add your verbs
        adjectives = ["adjective", "adjective", "adjective"], // FILL IN: add your adjectives
        custom = ["custom phrase", "custom phrase", "custom phrase"]; // FILL IN: add your custom phrases


    function pickWords(s) {
        var verb, article, articleTest, adjective, noun, sentence;
        verb = verbs[Math.floor(Math.random() * verbs.length)];
        adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        switch (s) {
        case 0:
        case 1:
        case 2:
            noun = singularNouns[Math.floor(Math.random() * singularNouns.length)];
            articleTest = adjective.charAt(0);
            switch (articleTest) {
            case "a":
            case "e":
            case "i":
            case "o":
                article = "an";
                break;
            case "u":
                if (adjective.substring(0, 4) === "user") {
                    article = "a";
                } else {
                    article = "an";
                }
                break;
            default:
                article = "a";
            }
            sentence = verb + " " + article + " " + adjective + " " + noun;
            break;
        case 3:
        case 4:
        case 5:
            noun = pluralNouns[Math.floor(Math.random() * pluralNouns.length)];
            sentence = verb + " " + adjective + " " + noun;
            break;
        case 6:
            sentence = custom[Math.floor(Math.random() * custom.length)];
            break;
        }
        return sentence;
    }

    function generate() {
        var structureType = Math.floor(Math.random() * structures);
        $("textarea").val(pickWords(structureType));
    }

    $("#generate").click(function () {
        generate();
    });
});