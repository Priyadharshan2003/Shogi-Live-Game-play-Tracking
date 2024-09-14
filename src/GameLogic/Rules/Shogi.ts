import {Board} from "../Board";
import {Rules} from "./Rules";
import {Game} from "../Game"
import {
    Bishop,
    BishopPromoted,
    Gold,
    King,
    Knight,
    KnightPromoted,
    Lance,
    LancePromoted,
    Pawn,
    PawnPromoted,
    Rook,
    RookPromoted,
    Silver,
    SilverPromoted
} from "../Piece/PieceShogi";
import * as cn from "chinese-numbering";


export class Shogi extends Rules{

    override styledIndex = (x: number, y: number) => `${x+1}${cn.numberToChinese(y+1)}`



    override initPieces = (game: Game) => [
        new Pawn(),
        new Lance(),
        new Knight(),
        new Silver(),
        new Gold(),
        new Bishop(),
        new Rook(),
        new King(),
        
        new PawnPromoted(),
        new LancePromoted(),
        new KnightPromoted(),
        new SilverPromoted(),
        new BishopPromoted(),
        new RookPromoted(),
    ]


    override initBoard = (game: Game) => {
        return Board.newBoard(game, [
            "         ",
            "         ",
            "         ",
            "         ",
            "         ",
            "         ",
            "ppppppppp",
            " b     r ",
            "lksgxgskl",

        ], game.players.list);
    }


}