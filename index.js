
const api = 'https://www.eventbriteapi.com/v3/organizations/604645012433/events/?token=T3WDVAJJSGPIT2JLXDLT&order_by=start_desc&time_filter=current_future&status=live'

fetch(api)
.then(response => response.json())
.then(data => displayEvents(data.events))
.catch(error => console.log(error))

const card = document.querySelector('.card')

const displayEvents = (eventData) => {
    let eventHtml = ''

    eventData.map((item) => {
        return (
            eventHtml += `
                <div class="left-content">
                    <h5>Name: ${item.name.text}</h5>
                    <p>Description: ${item.description.text}</p>
                    <p>Date: ${item.start.local}</p>
                </div>
                <div class="right-content">
                    <img src=${item.logo.url} alt="event-image" />
                </div>
            `
        )
    })
    card.innerHTML = eventHtml;


}

