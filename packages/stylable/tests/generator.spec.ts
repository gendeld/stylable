import { Generator } from '../src/generator';
import { Stylesheet } from '../src/stylesheet';
import { expect } from "chai";


describe('generator', function () {

    describe('generator.add', function () {

        let generator: Generator;

        beforeEach(() => {
            generator = new Generator({});
        });

        it('generate empty', function () {
            const stylesheet = new Stylesheet({});
            generator.add(stylesheet);
            expect(generator.buffer).to.eql([]);
        });

        it('generate with single rule', function () {
            const stylesheet = new Stylesheet({
                ".container": { color: "black" }
            });
            generator.add(stylesheet);
            expect(generator.buffer).to.eql([".container {\n    color: black\n}"]);
        });

        it('generate with multiple rules', function () {
            const stylesheet = new Stylesheet({
                ".container": { color: "black", background: "white" }
            });
            generator.add(stylesheet);
            expect(generator.buffer).to.eql([".container {\n    color: black;\n    background: white\n}"]);
        });

        it('generate with multiple selectors', function () {
            const stylesheet = new Stylesheet({
                ".container": { color: "black" },
                ".wrapper": { background: "white" }
            });
            generator.add(stylesheet);
            expect(generator.buffer).to.eql([
                ".container {\n    color: black\n}",
                ".wrapper {\n    background: white\n}"
            ]);
        });

    });

    describe('generator.addSelector', function(){

        it('generate scoped selector', function () {

            const generator = new Generator({ namespaceDivider: "__THE_GREAT_DIVIDER__" });

            generator.addSelector('.container', {}, 'TheNameSpace')

            expect(generator.buffer[0]).to.eql('.TheNameSpace__THE_GREAT_DIVIDER__container {}');

        });

        it('generate scoped selector with multiple classes', function () {

            const ctx = new Generator({ namespaceDivider: "__THE_GREAT_DIVIDER__" });

            ctx.addSelector('.container .img', {}, 'TheNameSpace')

            expect(ctx.buffer[0]).to.eql('.TheNameSpace__THE_GREAT_DIVIDER__container .TheNameSpace__THE_GREAT_DIVIDER__img {}');

        });

    });
    
});

