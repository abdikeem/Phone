document.addEventListener("DOMContentLoaded", function () {
    const fill = (number) => number < 10 ? number = "0" + number : number;
    let date = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("clock-body").innerHTML = days[date.getDay()].slice(0, 3) + ", " + months[date.getMonth()].slice(0, 3) + " " + date.getDate() + ", " + "Sololearn";
    const getTime = () => {
        document.getElementById("clock-screen").innerHTML = fill(date.getHours()) + ":" + fill(date.getMinutes());
        document.getElementById("clock-w").innerHTML = fill(date.getHours()) + ":" + fill(date.getMinutes());
    }
    setInterval(getTime, 100);
    let Div = (value1, value2) => {
        let obj = document.createElement("div");
        obj.setAttribute("class", value1);
        value2 == null ? obj.setAttribute("class", value1) : obj.setAttribute("id", value2);
        return obj;
    }
    let Node = (type, text) => {
        let obj = document.createElement(type);
        obj.innerHTML = text;
        return obj;
    }
    let Icon = (type) => {
        let obj = document.createElement("i");
        obj.setAttribute("class", "bi");
        obj.setAttribute("class", "icons-settings");
        obj.setAttribute("class", type);
        return obj;
    }
    let Image = (value, attr1, attr2) => {
        let obj = document.createElement("img");
        obj.setAttribute("src", value);
        if (!attr1 === null && !attr2 === null) {
            obj.setAttribute("class", attr1);
            obj.setAttribute("id", attr2);
        }
        if (!attr1 === null && attr2 === null) {
            obj.setAttribute("class", attr1);
        }
        return obj;
    }
    const hideTaskbar = (bool) => {
        if (bool) {
            document.getElementById("taskbar-buttons").style.visibility = "hidden";
        } else {
            document.getElementById("taskbar-buttons").style.visibility = "visible";
        }
    }
    let taskbarPermanentButtons = document.getElementById("taskbar-permanent-buttons"),
        phoneHeader = document.getElementById("phone-header"),
        phone = document.getElementById("phone"),
        clock = document.getElementById("clock-screen"),
        backBtn = document.getElementById("back-btn"),
        homeBtn = document.getElementById("home-btn"),
        taskBtn = document.getElementById("task-btn");
    const changeTaskarColor = () => taskbarPermanentButtons.classList.add("gray");
    const revertTasbarColor = () => taskbarPermanentButtons.classList.remove("gray");
    const changeBackground = () => {
        changeTaskarColor();
        taskbarPermanentButtons.style.backgroundColor = "#f2f2f2";
        phoneHeader.style.backgroundColor = "#f2f2f2";
        clock.style.color = "#424242";
    }
    const revertBackground = () => {
        revertTasbarColor();
        taskbarPermanentButtons.style.backgroundColor = "";
        phoneHeader.style.backgroundColor = "";
        hideTaskbar(false);
    }
    let pads = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
    let chs = ["...", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ", "", "", ""];
    let calcs = ["C", "<-", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "="];
    let numpad = (nr, text) => {
        let elem = Div("item-key");
        elem.appendChild(Node("p", nr));
        elem.appendChild(Node("p", text));
        return elem;
    }
    let changeClass = (obj, old, recent) => {
        obj.classList.remove(old);
        obj.classList.add(recent);
    }
    let daysInMonth = (month, year) => new Date(year, month, 0).getDate();
    let viorel = "https://blob.sololearn.com/avatars/39868f8a-d174-4781-b044-8bc2b9883f4a.jpg";
    class App {
        constructor(id) {
            this.id = id;
        }
        open() {
            let app = Div("app", this.id);
            let header = Div("app-header");
            let body = Div("app-body");
            switch (this.id) {
                case "calls":
                    let phoneKeypad = Div("phone-keypad-win");
                    let callHead = Div("call-header");
                    let callBody = Div("call-body");
                    callHead.appendChild(Node("h3", "Phone"));
                    let display = document.createElement("input");
                    display.setAttribute("class", "display");
                    display.setAttribute("disabled", "true");
                    callBody.appendChild(display);
                    let keys = Div("keyboard");
                    for (let index = 0; index < 12; index++) {
                        keys.appendChild(numpad(pads[index], chs[index]));
                    }
                    let call = Div("call");
                    let c = Icon("bi-telephone");
                    c.classList.add("class", "call-btn");
                    call.appendChild(c);
                    let back = Icon("bi-backspace-fill");
                    back.classList.add("delkey");
                    call.appendChild(back);
                    callBody.appendChild(keys);
                    callBody.appendChild(call);
                    phoneKeypad.appendChild(callHead);
                    phoneKeypad.appendChild(callBody);
                    let phoneRecents = Div("phone-recents-win");
                    let recentHead = Div("recent-header");
                    let recentBody = Div("recent-body");
                    recentHead.appendChild(Node("h3", "Phone"));
                    phoneRecents.appendChild(recentHead);
                    phoneRecents.appendChild(recentBody);
                    let phoneContacts = Div("phone-contacts-win");
                    let contactsHead = Div("contacts-header");
                    contactsHead.appendChild(Node("h4", "Phone"));
                    phoneContacts.appendChild(contactsHead);
                    let contactsBody = Div("contacts-body");
                    phoneContacts.appendChild(contactsBody);
                    let tabs = Div("phone-tabs");
                    let keypad = Node("span", "Keypad");
                    keypad.setAttribute("id", "keypad-btn");
                    keypad.classList.add("active-tab");
                    tabs.appendChild(keypad);
                    let recents = Node("span", "Recents");
                    recents.setAttribute("id", "recents-btn");
                    tabs.appendChild(recents);
                    let contacts = Node("span", "Contacts");
                    contacts.setAttribute("id", "contacts-btn");
                    tabs.appendChild(contacts);
                    app.appendChild(phoneKeypad);
                    app.appendChild(phoneRecents);
                    app.appendChild(phoneContacts);
                    app.appendChild(tabs);
                    break;
                case "messages":
                    header.appendChild(Node("h2", "Messages"));
                    header.appendChild(Node("p", "1 unread messages"));
                    app.appendChild(header);
                    setTimeout(() => {
                        let sms = Div("row-sms");
                        let col1 = Div("col-sms-avatar");
                        col1.appendChild(Image(viorel));
                        let col2 = Div("col-sms-content");
                        let smsHead = Node("p", "Viorel");
                        smsHead.setAttribute("class", "message-header");
                        let smsContent = Node("span", "Thank you for checking my code!");
                        col2.appendChild(smsHead);
                        col2.appendChild(smsContent);
                        sms.appendChild(col1);
                        sms.appendChild(col2);
                        sms.addEventListener("click", function () {
                            sms.style.backgroundColor = "#f2f2f2";
                            document.getElementsByClassName("app-header")[0].lastChild.innerHTML = "No unread messages";
                        })
                        body.appendChild(sms);
                        app.appendChild(body);
                    }, 350);
                    break;
                case "settings":
                    let setttings = ["Connection", "Sounds and vibration", "Notifications", "Display", "Wallpapers",
                        "Themes", "Lock screen", "Biometrics and security", "Privacy", "Location", "Accounts and backup",
                        "Google", "Advanced freatures", "Device care", "Apps", "About phone"];
                    let icons_set = ["bi-wifi", "bi-volume-up", "bi-bell", "bi-phone", "bi-images", "bi-layout-sidebar-inset",
                        "bi-file-lock", "bi-shield-check", "bi-shield-shaded", "bi-geo-alt", "bi-person-circle", "bi-google",
                        "bi-award", "bi-heart", "bi-app", "bi-info-circle"];
                    changeClass(header, "app-header", "set-header");
                    changeClass(body, "app-body", "set-body");
                    header.appendChild(Node("h3", "Settings"));
                    header.appendChild(Image(viorel));
                    app.appendChild(header);
                    for (let index = 0; index < 16; index++) {
                        let row = Div("row-set");
                        row.appendChild(Icon(icons_set[index]));
                        row.appendChild(Node("p", setttings[index]));
                        body.appendChild(row);
                    }
                    app.appendChild(body);
                    break;
                case "camera":
                    changeClass(body, "app-body", "camera-body");
                    body.appendChild(Icon("bi-camera-fill"));
                    body.appendChild(Icon("bi-arrow-counterclockwise"));
                    body.appendChild(Icon("bi-file-earmark-excel"));
                    app.appendChild(body);
                    phoneHeader.style.backgroundColor = "#000";
                    taskbarPermanentButtons.style.backgroundColor = "#000";
                    break;
                case "calendar":
                    let days = ["M", "T", "W", "T", "F", "S", "S"];
                    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
                        "September", "October", "November", "December"];
                    let year = date.getFullYear();
                    changeClass(header, "app-header", "cal-header");
                    changeClass(body, "app-body", "cal-body");
                    header.appendChild(Node("h3", months[date.getMonth()].slice(0, 3).toUpperCase() + " " + year));
                    header.appendChild(Icon("bi-calendar-date"));
                    app.appendChild(header);
                    let day = Div("days");
                    for (let index = 0; index < days.length; index++) {
                        day.appendChild(Node("p", days[index]));
                    }
                    app.appendChild(day);
                    let count = daysInMonth(date.getMonth() + 1, year);
                    for (let index = 1; index <= count; index++) {
                        body.appendChild(Node("p", index));
                    }
                    app.appendChild(body);
                    body.children[date.getDate() - 1].classList.add("today");
                    break;
                case "files":
                    let dirs = ["Alarms", "Android", "DCIM", "Download", "Movies", "Music", "Notifications",
                        "Pictures", "Podcats", "Ringtones", "Samsung", "Telegram", "WhatsApp"];
                    changeClass(header, "app-header", "files-header");
                    header.appendChild(Icon("bi-folder"));
                    header.appendChild(Icon("bi-caret-right"));
                    header.appendChild(Node("p", "Internal storage"));
                    changeClass(body, "app-body", "files-body");
                    for (let index = 0; index < 13; index++) {
                        let file = Div("file");
                        file.appendChild(Icon("bi-folder"));
                        file.appendChild(Node("p", dirs[index]));
                        body.appendChild(file);
                    }
                    app.appendChild(header);
                    app.appendChild(body);
                    break;
                case "alarm":
                    let off = "Alarms";
                    changeClass(header, "app-header", "alarm-header");
                    header.appendChild(Node("h3", off));
                    changeClass(body, "app-body", "alarm-body");
                    app.appendChild(header);
                    let alarm1 = Div("alarm-row");
                    alarm1.appendChild(Node("p", "6:00"));
                    let rightSide = Div("alarm-onoff");
                    rightSide.appendChild(Node("p", "Every day"));
                    let input = document.createElement("input");
                    input.setAttribute("id", "1");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("checked", "true");
                    input.setAttribute("disabled", "true");
                    rightSide.appendChild(input);
                    alarm1.appendChild(rightSide);
                    body.appendChild(alarm1);
                    app.appendChild(body);
                    break;
                case "calculator":
                    changeClass(header, "app-header", "calc-header");
                    let ouput = document.createElement("input");
                    ouput.setAttribute("disabled", "true");
                    ouput.setAttribute("class", "display-calc");
                    header.appendChild(ouput);
                    changeClass(body, "app-body", "calc-body");
                    app.appendChild(header);
                    for (let index = 0; index < 18; index++) {
                        let div = Div("item");
                        div.appendChild(Node("p", calcs[index]));
                        let id;
                        switch (calcs[index]) {
                            case "<-":
                                id = "backspace";
                                break;
                            case "/":
                                id = "divide";
                                break;
                            case "x":
                                id = "multi";
                                break;
                            case "-":
                                id = "dif";
                                break;
                            case "+":
                                id = "add";
                                break;
                            case ".":
                                id = "deci";
                                break;
                            case "=":
                                id = "result";
                                break;
                            default:
                                id = calcs[index];
                                break
                        }
                        div.setAttribute("id", id);
                        body.appendChild(div);
                    }
                    app.appendChild(body);
                    break;
            }
            phone.appendChild(app);
            homeBtn.addEventListener("click", function () {
                app.remove();
                revertBackground();
            })
            backBtn.addEventListener("click", function () {
                app.remove();
                revertBackground();
            })
        }
    }
    let phoneBtn = document.getElementById("phone-btn"),
        smsBtn = document.getElementById("sms-btn"),
        setBtn = document.getElementById("set-btn"),
        img = document.getElementById("imgs-btn"),
        calendar = document.getElementById("cal-btn"),
        files = document.getElementById("files-btn"),
        alarm = document.getElementById("alarm-btn"),
        calculator = document.getElementById("calc-btn");
    let calling_info = ["Add call", "Hold call", "Bluetooth", "Speaker", "Mute", "Keypad"];
    let calling_ico = ["bi-telephone-plus", "bi-pause", "bi-soundwave", "bi-volume-up", "bi-mic-mute", "bi-command"];
    const removeBackground = () => {
        taskbarPermanentButtons.classList.remove("cover");
        phoneHeader.classList.remove("cover");
    }
    let nr = '0123456789';
    let phone_nr = () => {
        let result = '';
        for (let index = 0; index < 12; index++) {
            result += nr.charAt(Math.floor(Math.random() * nr.length));
        }
        return result;
    }
    class CallNumber {
        constructor(ph, name, ag, number) {
            this.ph = ph;
            this.name = name;
            this.number = number;
            this.ag = ag
        }
        open() {
            let window = Div("dialing");
            let windHead = Div("dialing-head");
            windHead.appendChild(Node("p", "Calling..."));
            if (this.ph) {
                windHead.appendChild(Node("h3", this.number));
            } else {

                windHead.appendChild(Node("p", this.name))
                windHead.appendChild(Node("p", "Mobile ++" + phone_nr()));
                windHead.appendChild(Image(this.ag));
            }
            window.appendChild(windHead);
            let windBody = Div("dialing-body");
            let calingpad = Div("calling-pad");
            for (let index = 0; index < 6; index++) {
                let elem = Div("item-call");
                elem.appendChild(Icon(calling_ico[index]));
                elem.appendChild(Node("p", calling_info[index]));
                calingpad.appendChild(elem);
            }
            windBody.appendChild(calingpad);
            let finishCall = Icon("bi-telephone-x");
            finishCall.setAttribute("id", "finish-call");
            windBody.appendChild(finishCall);
            window.appendChild(windBody);
            revertTasbarColor();
            phoneHeader.classList.add("cover");
            taskbarPermanentButtons.classList.add("cover");
            phone.appendChild(window);
            document.getElementById("finish-call").addEventListener("click", function () {
                window.remove();
                changeTaskarColor();
                removeBackground();
            })
            homeBtn.addEventListener("click", function () {
                window.remove();
                removeBackground();
            })
            backBtn.addEventListener("click", function () {
                window.remove();
                removeBackground();
            })
        }
    }
    let alpha = 'abcdefghijklmnopqrstuvxyz';
    let suggestion = (len) => {
        let result = '';
        for (let index = 0; index < len; index++) {
            result += alpha.charAt(Math.floor(Math.random() * alpha.length));
        }
        return result;
    }
    let searched = false;
    let load = () => {
        let search = Div("search");
        search.appendChild(Icon("bi-search"));
        let inp = document.createElement("input");
        inp.classList.add("input-search");
        inp.maxLength = 20;
        let winds = Div("box-search");
        for (let index = 0; index < 5; index++) {
            let wordRow = Div("word-row", index);
            winds.appendChild(wordRow);
            phone.appendChild(winds);
        }
        inp.addEventListener("click", function () {
            if (!searched) {
                searched = true;
            }
        })
        search.appendChild(inp);
        phone.appendChild(search);
    }
    load();
    let search_input = document.getElementsByClassName("input-search")[0];
    search_input.oninput = function () {
        document.getElementsByClassName("box-search")[0].style.visibility = "visible";
        let w0 = document.getElementById("0");
        w0.innerHTML = search_input.value + suggestion(2);
        w0.addEventListener("click", function () {
            search_input.value = w0.innerHTML;
        })
        let w1 = document.getElementById("1");
        w1.innerHTML = search_input.value + suggestion(4);
        w1.addEventListener("click", function () {
            search_input.value = w1.innerHTML;
        })
        let w2 = document.getElementById("2")
        w2.innerHTML = search_input.value + suggestion(6);
        w2.addEventListener("click", function () {
            search_input.value = w2.innerHTML;
        })
        let w3 = document.getElementById("3");
        w3.innerHTML = search_input.value + suggestion(8);
        w3.addEventListener("click", function () {
            search_input.value = w3.innerHTML;
        })
        let w4 = document.getElementById("4");
        w4.innerHTML = search_input.value + suggestion(6);
        w4.addEventListener("click", function () {
            search_input.value = w4.innerHTML;
        })
        if (search_input.value.length === 0) {
            document.getElementsByClassName("box-search")[0].style.visibility = "hidden";
        }
    }
    let getRecentCall = (f, number, hour, avt, name) => {
        let row = Div("recent-call");
        callToday = true;
        let row_av = Div("recent-call-who");
        let row_nr = Div("recent-call-nr");
        if (f) {
            row_av.appendChild(Image(avt));
            row_nr.appendChild(Node("p", name));
            row_nr.appendChild(Node("p", "Mobile"));
        } else {
            row_av.appendChild(Icon("bi-person-circle"));
            row_nr.appendChild(Node("p", number));
            row_nr.appendChild(Node("p", "unsaved"));
        }
        let row_h = Div("recent-call-h");
        row_h.appendChild(Node("span", hour));
        row.appendChild(row_av);
        row.appendChild(row_nr);
        row.appendChild(row_h);
        return row;
    }
    let addContact = (user, avatar, name) => {
        let contact = Div("contact-item");
        let contactData = Div("contact-item-data");
        let contactDataAv = Div("contact-item-data-av");
        contactDataAv.appendChild(Image(avatar));
        contactData.appendChild(contactDataAv);
        let contactDataName = Div("contact-item-data-name");
        contactDataName.appendChild(Node("p", name));
        contactData.appendChild(contactDataName);
        contact.appendChild(contactData);
        return contact;
    }
    let contactsNames = ["Viorel(...);", "A.S.M", "AKR", "An¢h!tα §απmα", "Coder", "Deepanshu Gupta", "Devansh Singh Bisht",
        "Ethan", "Jan Markus", "Mitali", "Niki", "Pɾιყα", "RJ", "Rafique", "Rashi Chauhan", "Sofi", "Srishti Soni", "Thə☆Qมєєи"];
    let contactsAvatars = [
        viorel,
        "https://blob.sololearn.com/avatars/b74bed7f-c0a2-45a4-b0a6-7cb4ff2a791e.jpg",
        "https://blob.sololearn.com/avatars/39d2c633-1332-48cb-8c82-a441cbdc54de.jpg",
        "https://blob.sololearn.com/avatars/3bb0532f-2e8e-4968-99ab-460cf79c0e37.jpg",
        "https://blob.sololearn.com/avatars/00b3cdca-8ca5-4d30-99d1-6dc9f65f668c.jpg",
        "https://blob.sololearn.com/avatars/1eb0b884-03b9-48a5-8b35-bba92ffe2531.jpg",
        "https://blob.sololearn.com/avatars/9bd499da-caaf-4697-b889-a4147b974d62.jpg",
        "https://blob.sololearn.com/avatars/3777dc35-3329-437d-bdd0-4bcfa5c5bf1b.jpg",
        "https://blob.sololearn.com/avatars/dd16c1d7-1670-4b2c-99e5-0298e800a710.jpg",
        "https://blob.sololearn.com/avatars/e12aaefa-e547-437e-a890-4126ed3b6bae.jpg",
        "https://blob.sololearn.com/avatars/4356da17-8314-4940-a064-6b5a7e00f269.jpg",
        "https://dl.dropbox.com/s/uqccevby5rwz9gb/5cb952f1-cc6c-475f-b2e5-a21999391d9e.jpg",
        "https://blob.sololearn.com/avatars/f97fac12-2c2c-4dbc-ab26-f1cde237bc9b.jpg",
        "https://blob.sololearn.com/avatars/2ce3e977-d413-4986-b529-3ba7469eb030.jpg",
        "https://blob.sololearn.com/avatars/2d64526d-ce0d-4a34-b80b-b331abaf60ea.jpg",
        "https://blob.sololearn.com/avatars/12835c18-77f6-4c97-aa1c-069eb7b83a6f.jpg",
        "https://blob.sololearn.com/avatars/70ced913-e4b5-4c0a-8917-abb6d555726e.jpg",
        "https://blob.sololearn.com/avatars/aa37a1a1-4a55-4587-8adc-609fbf19f411.jpg"];
    phoneBtn.addEventListener("click", function () {
        hideTaskbar();
        changeBackground();
        phoneApp = true;
        let call = new App("calls");
        call.open()
        let isPress = false;
        let display = document.getElementsByClassName("display")[0];
        let keyboard = document.getElementsByClassName("keyboard")[0];
        let delkey = document.getElementsByClassName("delkey")[0];
        let phoneTabs = document.getElementsByClassName("phone-tabs")[0];
        let keys = keyboard.children;
        let keypadBtn = document.getElementById("keypad-btn");
        let recentsBtn = document.getElementById("recents-btn");
        let contactsBtn = document.getElementById("contacts-btn");
        let cts = document.getElementsByClassName("contacts-body")[0];
        cts.appendChild(addContact(false, viorel, "Viorel(...);"));
        for (let index = 1; index < 18; index++) {
            cts.appendChild(addContact(true, contactsAvatars[index], contactsNames[index]));
        }
        for (let index = 0; index < keys.length; index++) {
            keys[index].addEventListener("click", function () {
                delkey.style.visibility = "visible";
                phoneTabs.style.visibility = "hidden";
                if (display.value.length < 15) {
                    if (!isPress) {
                        isPress = true;
                        delkey.addEventListener("click", function () {
                            display.value = display.value.replace(display.value[display.value.length - 1], "");
                            if (display.value.length === 0) {
                                delkey.style.visibility = "hidden";
                                phoneTabs.style.visibility = "visible";
                            }
                        })
                    }
                    display.value += pads[index];
                }
            })
        }
        document.getElementsByClassName("call-btn")[0].addEventListener("click", function () {
            if (display.value.length > 0) {
                let callNumber = new CallNumber(true, "", "", display.value);
                callNumber.open();
                let rb = document.getElementsByClassName("recent-body")[0];
                let when = fill(date.getHours() + ":" + fill(date.getMinutes()));
                rb.appendChild(getRecentCall(false, display.value, when));
            }
        })
        let phoneKeypadWin = document.getElementsByClassName("phone-keypad-win")[0];
        let phoneRecentsWin = document.getElementsByClassName("phone-recents-win")[0];
        let phoneContactsWin = document.getElementsByClassName("phone-contacts-win")[0];
        const rvkActive = () => {
            if (keypadBtn.classList.contains("active-tab")) {
                keypadBtn.classList.remove("active-tab");
            }
            if (recentsBtn.classList.contains("active-tab")) {
                recentsBtn.classList.remove("active-tab");
            }
            if (contactsBtn.classList.contains("active-tab")) {
                contactsBtn.classList.remove("active-tab");
            }
            phoneKeypadWin.style.display = "none";
            phoneRecentsWin.style.display = "none";
            phoneContactsWin.style.display = "none";
        }
        keypadBtn.addEventListener("click", function () {
            rvkActive();
            keypadBtn.classList.add("active-tab");
            phoneKeypadWin.style.display = "block";
        })
        recentsBtn.addEventListener("click", function () {
            rvkActive();
            recentsBtn.classList.add("active-tab");
            phoneRecentsWin.style.display = "block";
        })
        contactsBtn.addEventListener("click", function () {
            rvkActive();
            contactsBtn.classList.add("active-tab");
            phoneContactsWin.style.display = "block";
        })
        let ag = document.getElementsByClassName("contacts-body")[0].children;
        for (let index = 0; index < ag.length; index++) {
            ag[index].addEventListener("click", function () {
                let cn = new CallNumber(false, contactsNames[index], contactsAvatars[index], "");
                cn.open();
                let fr = document.getElementsByClassName("recent-body")[0];
                fr.appendChild(getRecentCall(true, "", fill(date.getHours()) + ":" + fill(date.getMinutes()), contactsAvatars[index], contactsNames[index]));
            })
        }
    });
    smsBtn.addEventListener("click", function () {
        changeBackground()
        messageApp = true;
        let mes = new App("messages");
        mes.open();
    });
    setBtn.addEventListener("click", function () {
        settingsApp = true;
        changeBackground();
        let set = new App("settings");
        set.open();
    });
    img.addEventListener("click", function () {
        changeBackground();
        let images = new App("camera");
        images.open();
    })
    calendar.addEventListener("click", function () {
        changeBackground();
        let cal = new App("calendar");
        cal.open();
    })
    files.addEventListener("click", function () {
        changeBackground();
        let files = new App("files");
        files.open();
    })
    alarm.addEventListener("click", function () {
        changeBackground();
        let alarms = new App("alarm");
        alarms.open();
    })
    let ready = (item) => !isNaN(item[item.length - 1]);
    calculator.addEventListener("click", function () {
        changeBackground();
        let calc = new App("calculator");
        calc.open();
        let calc_result = document.getElementsByClassName("display-calc")[0];
        let calc_body = document.getElementsByClassName("calc-body")[0];
        let key = calc_body.children;
        let decimal = false, task = false;
        for (let index = 0; index < key.length; index++) {
            key[index].addEventListener("click", function () {
                if (calc_result.value.length < 18) {

                    if (calcs[index] === "C") {
                        calc_result.value = "";
                    }
                    if (calcs[index] !== "C" && calcs[index] !== "<-" && calcs[index] !== "="
                        && calcs[index] !== "/" && calcs[index] !== "*" && calcs[index] !== "-"
                        && calcs[index] !== "+" && calcs[index] !== "." && calcs[index] !== "0") {
                        calc_result.value += calcs[index];
                    }
                    if (calc_result.value.length > 0) {
                        if (calcs[index] === "0") {
                            calc_result.value += "0";
                        }
                        if (calcs[index] === ".") {
                            if (!decimal) {
                                calc_result.value += ".";
                                decimal = true;
                            }
                        }
                        if (calcs[index] === "+") {
                            if (ready(calc_result.value)) {
                                if (!task) {
                                    calc_result.value += "+";
                                    task = true;
                                } else {
                                    calc_result.value = eval(calc_result.value) + "+";
                                    task = true;
                                }
                            }
                        }
                        if (calcs[index] === "-") {
                            if (ready(calc_result.value)) {
                                if (!task) {
                                    calc_result.value += "-";
                                    task = true;
                                } else {
                                    calc_result.value = eval(calc_result.value) + "-";
                                    task = true;
                                }
                            }
                        }
                        if (calcs[index] === "*") {
                            if (ready(calc_result.value)) {
                                if (!task) {
                                    calc_result.value += "*";
                                    task = true;
                                } else {
                                    calc_result.value = eval(calc_result.value) + "*";
                                    task = true;
                                }
                            }
                        }
                        if (calcs[index] === "/") {
                            if (ready(calc_result.value)) {
                                if (!task) {
                                    calc_result.value += "/";
                                    task = true;
                                } else {
                                    calc_result.value = eval(calc_result.value) + "/";
                                    task = true;
                                }
                            }
                        }
                    }
                    if (calcs[index] === "=") {
                        if (calc_result.value.length > 0) {
                            if (ready(calc_result.value)) {
                                calc_result.value = eval(calc_result.value);
                            } else {
                                calc_result.value = calc_result.value.replace(calc_result.value[calc_result.value.length - 1], "");
                                calc_result.value = eval(calc_result.value);
                            }
                        }
                    }
                    if (calcs[index] === "<-") {
                        if (calc_result.value[calc_result.value.length - 1] === ".") {
                            decimal = false;
                        }
                        calc_result.value = calc_result.value.replace(calc_result.value[calc_result.value.length - 1], "");
                    }
                } else {
                    if (calcs[index] === "C") {
                        calc_result.value = "";
                    }
                    if (calcs[index] === "<-") {
                        if (calc_result.value[calc_result.value.length - 1] === ".") {
                            decimal = false;
                        }
                        calc_result.value = calc_result.value.replace(calc_result.value[calc_result.value.length - 1], "");
                    }
                }
            })
        }
    })
});

