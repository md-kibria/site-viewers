const fs = require('fs');
const path = require('path')

class Data {
    getData() {
        try {
            let data = fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw new Error(error)
        }
    }

    addData(req) {
        try {
            let data = fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf-8')
            data = JSON.parse(data || '[]')

            const id = data.length!=0 ? Number(data[data.length-1].id)+1 : 1;
            const time = new Date().toLocaleString('en-US', {timeZone: 'Asia/Dhaka'});
            const ip = req.ip
            const device = req.device.type.toUpperCase()
            const site = req.query.site
            
            const newViewer = {
                id,
                time,
                site,
                ip,
                device
            }

            data.push(newViewer)

            fs.writeFileSync(path.join(__dirname, '../data/data.json'), JSON.stringify(data));
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = new Data()

/**
 * Id
 * Time
 * Site
 * Ip
 * Device
 */