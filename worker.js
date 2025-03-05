export default {
    fetch() {
        const str = 'hello world!';

        console.log('a console.log!');
        console.log(str);

        debugger;
        return new Response(str);
    }
}