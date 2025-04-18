
function formDataRetriver(event) {
    const formData = event.target.elements
    return {
        name: formData.name.value,
        email: formData.email.value,
        about: formData.proposal.value,
        cellphone: ''
    }
}

function dataFactory(name, email, proposal) {
    console.log('Name: '+name)
    console.log('Email: '+email)
    console.log('Proposal: '+proposal)
    return {
        name: name, email:email, about:proposal, cellphone: ''
    }
}

const submitProposal = (server_status, change_popup_method) => {
    console.log('submiting proposal')
    if (server_status === 'offline') {
        console.log('server is down')
        change_popup_method('offline', 'Server is Offline...')
    } else {
        console.log('proposal sended')
        change_popup_method('online', 'Sending proposal...')

    }
}

const clearForm = (event) => {
    event.target.elements.name.value = '';
    event.target.elements.email.value = '';
    event.target.elements.proposal.value = '';
}

export {formDataRetriver, dataFactory, submitProposal, clearForm};