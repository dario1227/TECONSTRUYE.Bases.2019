import app from './app'
async function main(){
    await app.listen(4800);
    console.log('Server on port 4800');
};

main();