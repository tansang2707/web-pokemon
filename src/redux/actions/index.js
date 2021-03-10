import APIServices from '../../api'

const getListVersion = () => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                '/version',
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getListGeneration = () => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                '/generation',
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getListLocation = () => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                '/location',
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getListItem = () => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                '/item',
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getListPokemon = ({ limit, offset }) => {
    const params = {}
    if (limit) params.limit = limit
    if (offset) params.offset = offset
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                '/pokemon',
                {},
                params
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getPokemonDetail = (url) => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                url,
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getItemDetail = (url) => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                url,
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await APIServices.sendRequest(
                'get',
                `/pokemon/${name}`,
                {}
            )
            if (response.isError) throw response.err;
            return { ok: true, data: response.data }
        } catch (error) {
            return { ok: false, data: error }
        }
    }
}

export default {
    getListVersion,
    getListGeneration,
    getListLocation,
    getListItem,
    getListPokemon,
    getPokemonDetail,
    getItemDetail,
    getPokemonByName
}