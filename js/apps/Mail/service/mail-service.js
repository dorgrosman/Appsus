import { utilsService } from './utils-service.js'

export const mailService = {

    query,
    getMailById,
    saveMails,
    deleteMail,
    addMail,
    markMails,
    getNewMail
}

var gMails = _createMails()

function query() {
    saveMails();
    return gMails
}

function getNewMail() {

    const today = new Date();
    const mail = {
        id: utilsService.makeId(),
        user: '',
        subject: '',
        body: '',
        isRead: false,
        isActiv: false,
        isSent: true,
        sentAt: today.toISOString().substr(0, 10)
    }
    return mail
}

function addMail(mail) {

    gMails.unshift(mail)
    query();
    saveMails()
    return gMails
}

function deleteMail(mailId) {

    const idx = gMails.findIndex(mail => mail.id === mailId)
    gMails.splice(idx, 1)
    saveMails();
    query();
    return gMails
}

function markMails() {
    return gMails
}

function saveMails() {
    utilsService.storeToStorage('mails', gMails)
}

function getMailById(id) {
    const mail = gMails.find(mail => mail.id === id)
    return mail
}

function _createMails() {

    var mails = utilsService.loadFromStorage('mails');
    if (mails && mails.length) return mails;

    mails = [{
        id: utilsService.makeId(),
        user: 'dor@walla.com',
        subject: 'sport',
        body: 'Sport includes all forms  prSports can bring positive re" or eticism or physical dexterity, with the largest major competitions such as the Olympic Games admitting only sports meeting this definition,[3] and other organisations such as the Council of Europe using definitions precluding activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, ',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2019'
    },
    {
        id: utilsService.makeId(),
        user: 'zoe@gmail.com',
        subject: 'Suit',
        body: 'In 1993, the Renuar Group was foun later, in 1994, Serge Deri joined them, and since then he has served as Group CEO.In 1993, the Renuar Group was founded by businessmen Eli Berkowitz and Yossi Brosh. A year later, in 1994, Serge Deri joined them, and since then he has served as Group CEO.In 1993, the Renuar Group was founded by businessmen Eli Berkowitz and Yossi Brosh. A year later, in 1994, Serge Deri joined them, and since then he has served as Group CEO.',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '12-4-2019'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'gym',
        body: 'hello! my name is o single winner;  the Council of Europe using definitions precluding activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, and SportAccord, the international sports federation association, recognises five non-physical sports: bridge, chess, draughts (checkers), Go and xiangqi,[4][5] and limits the number of mind games which can be admitted',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-3-2019'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3hello! my name is dor and i like to run3hello! my name is dor and i like to run3hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '23-1-2018'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'o single winner;  the Council of Europe using definitions precluding activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, and SportAccord, the international sports federation association, recognises five non-physical sports: bridge, chess, draughts (checkers), Go and xiangqi,[4][5] and limits the number of mind games which can be admitted',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    },
    {
        id: utilsService.makeId(),
        user: 'ben@hotmail.com',
        subject: 'sport',
        body: 'hello! my name is dor and i like to run3',
        isRead: false,
        isActiv: false,
        isSent: false,
        sentAt: '22-11-2017'
    }
    ]
    return mails
}