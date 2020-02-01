const mock = (success, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve();
            } else {
                reject({ message: 'Error' });
            }
        }, timeout || 1000);
    });
}

const someEvent = async () => {
    try {
        await mock(true, 1000);
    } catch (e) {
        console.log(e.message);
    }
}

export {mock, someEvent};
