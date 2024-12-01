// Task-1 Будильник-колыбельная
class AlarmClock {
    constructor() {
        this.alarmCollection = []; // хранение коллекции звонков
        this.intervalId = null; // для хранения id таймера без начального значения
    }

    // добавляет новый звонок в коллекцию существующих
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.push({callback, time, canCall: true});
        
        if (this.alarmCollection.some(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }
    }

    //удаляет звонки по определённому времени
    removeClock(time) { 
        this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
    }

    // возвращает текущее время в строковом формате HH:MM
    getCurrentFormattedTime() { 
        const timeNow = new Date();
        return timeNow.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})
    }

    // запускает будильник
    start() { 
        if (this.intervalId !== null) {
            return;
        }
        
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(call => {
                if (call.time === currentTime && call.canCall) {
                    call.canCall = false;
                    call.callback();
                }
            });
        }, 1000);  
    }

    // останавливает выполнение интервала будильника
    stop() { 
        if (this.intervalId !== null){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    // сбрасывает возможность запуска всех звонков
    resetAllCalls() { 
        this.alarmCollection.forEach(call => call.canCall = true);
    }

    // удаляет все звонки
    clearAlarms() { 
        this.stop();
        this.alarmCollection = [];
    }
}