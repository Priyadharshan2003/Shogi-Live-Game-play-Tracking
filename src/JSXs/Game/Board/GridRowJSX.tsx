import {map} from "./BoardJSX/BoardJSX";
import {GridJSX} from "./GridJSX/GridJSX";
import {Game} from "../../../GameLogic/Game";

export function GridRowJSX({game, y, /*handleClick,*/ updateGridMethodsArray}:
                                 { game: Game, y: number,
                                     //handleClick: (x: number) => void,
                                     updateGridMethodsArray: (()=>void)[][]
                                 }) {
    console.log(`- RERENDER Grid Row #${y}`);



    return (
        <div className="board-row">
            {
                map(
                    game.board.width, (x) =>
                        <GridJSX
                            game={game}
                            x={x} y={y}
                            updateGridMethodsArray={updateGridMethodsArray}
                        />
                )
            }
        </div>
    )
}