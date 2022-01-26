
const api = 'https://www.eventbriteapi.com/v3/organizations/604645012433/events/?token=T3WDVAJJSGPIT2JLXDLT&order_by=start_desc&time_filter=current_future&status=live'

fetch(api)
.then(response => response.json())
.then(data => displayEvents(data.events))
.catch(error => console.log(error))

const main = document.querySelector('.main-container')

const displayEvents = (eventData) => {
    let eventHtml = ''

    eventData.map((item, index) => {
        return (
            eventHtml += `
            <div class="card" data-index="${index}"> 
                <div class="event-image">
                    <img src=${item.logo.original.url} alt="event-image" />
                </div>
                <div class="event-content">
                    <h3>${item.name.text}</h3>
                    <p>${item.start.local}</p>
                    <p>${item.description.text}</p>
                </div>
            </div>
            `
        )
    })
    main.innerHTML = eventHtml;
}

