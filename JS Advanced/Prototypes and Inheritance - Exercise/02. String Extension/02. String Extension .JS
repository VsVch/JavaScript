(function main(){

    String.prototype.ensureStart = function(str){

        if (this.startsWith(str)) {

            return this.toString();
        }

        return str + this;
    } 

    String.prototype.ensureEnd = function(str){

        if (this.endsWith(str)) {
            
            return this.toString();
        }

        return this + str;
    }

    String.prototype.isEmpty = function (){

        return this.length === 0;
    }

    String.prototype.truncate = function(n) {

        if (this.length <= n) {
            return this.toString();

        }
        if (this.length > n) {
            if (this.includes(' ')) {
                let spaceIndx = this.indexOf(' ');
                let nextSpaceIndx = this.indexOf(' ', spaceIndx + 1);

                while (nextSpaceIndx > 0 && nextSpaceIndx + 3 <= n) {
                    spaceIndx = nextSpaceIndx;
                    nextSpaceIndx = this.indexOf(' ', spaceIndx + 1);
                }

                return this.slice(0, spaceIndx) + '...';

            } else {
                if (n < 4) {
                    return '.'.repeate(n);
                }

                return this.slice(0, n - 3) + '...';

            }

        }
    }



    String.format = function(str, ...params) {

        let indx = 0;

        return str.split(' ')
            .map(word => {

                if (word === `{${indx}}` && params[indx]) {
                    word = params[indx];

                    indx++;
                }

                return word;
            })
            .join(' ');
    }
})();