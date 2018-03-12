import * as data_Module from './data/data_module.js';
var single_ctrl_module = ((UI, DATA) => {

        const init = () => {
            const singleID = DATA.getFromStorage("showID");
            displaySingleShow(parseInt(singleID));
        }
    
        const displaySingleShow = (id) => {
            $.get(`${DATA.showUrl.url}/${id}`).done(function (response) {
                const currentShow = DATA.createSingleShow(response);
                UI.createSingleShow(currentShow);
            })
        }
    
        return {
            init,
            displaySingleShow
        }
    
    })(ui_Module, data_Module)
    
    $(single_ctrl_module.init())



























    

