function TV(brand){
   this.brand = brand ;
   this.channel = 1 ;
   this.volume = 50 ;
}
TV.prototype.changeVolume = function(percentVol){
    if(percentVol <= 100 && percentVol >=0){
        this.volume = percentVol
    }
} ;
TV.prototype.setChannel = function(channelNum){
    if(channelNum <= 50 && channelNum >=1){
        this.channel = channelNum
    }
} ;
TV.prototype.toReset = function(){
    if(this.volume !== 50 && this.channel !== 1){
        this.volume = 50 
        this.channel = 1
    }
}
TV.prototype.getStatus = function(){
    return `${this.brand} at channel ${this.channel} , volume ${this.volume}`
}
