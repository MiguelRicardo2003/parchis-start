import Square from "./components/Square";
import Circle from "./components/Circle";
import { useState } from "react";

function App({}) {
  const [isRolling, setIsRolling] = useState(false);
  const [diceNumbers, setDiceNumbers] = useState([1, 1]);

  const handleRollDice = () => {
    setIsRolling(true);

    // Generar dos números aleatorios entre 1 y 6 para los dos dados
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    setDiceNumbers([randomNumber1, randomNumber2]);

    // Detener la animación después de 1 segundo (cuando termine el giro)
    setTimeout(() => {
      setIsRolling(false);
      g;
    }, 3000);
  };

  const diceImages = {
    1: "/dado1.png",
    2: "/dado2.png",
    3: "/dado3.png",
    4: "/dado4.png",
    5: "/dado5.png",
    6: "/dado6.png",
  };

  return (
    <div className="w-full h-screen flex items-center justify-evenly flex-row ">
      <div className="w-[450px] h-[450px] border-8 border-orange-900 flex flex-col">
        {/*Primera fila*/}
        <div className="flex flex-row w-full h-1/3">
          <div className=" w-1/3 h-full border-[1px] border-black flex items-center justify-center">
            <Square borderColor="border-red-500" />
          </div>
          <div className="w-1/3 h-full border-[1px] border-black flex-col flex">
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                33
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-center font-medium text-[12px] gap-1">
                <Circle color={"bg-slate-300"} number={34} />
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                35
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                32
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                36
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                31
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                37
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                30
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                38
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px] gap-1">
                <Circle color={"bg-slate-300"} />
                29
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] bg-red-500 gap-1">
                39
                <Circle />
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                28
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                40
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                27
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                41
              </div>
            </div>
          </div>
          <div className=" w-1/3 h-full border-[1px] border-black flex items-center justify-center">
            <Square borderColor="border-blue-300" />
          </div>
        </div>
        {/*Segunda fila*/}
        <div className=" flex-row flex w-full h-1/3">
          <div className="w-1/3 h-full border-[1px] border-black flex flex-col rotate-90">
            {/*Casillas de la fila*/}
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                44
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                58
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                45
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                57
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px] gap-1">
                <Circle color={"bg-slate-300"} />
                46
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] bg-green-500 gap-1">
                56
                <Circle />
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                47
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                55
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                48
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                54
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                49
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                53
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                50
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-center">
                <Circle color={"bg-slate-300"} number={51} />
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                52
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full border-[1px] flex flex-col relative">
            {/* Casilla centrada */}
            <div id="top-right" class="absolute right-0 w-[48px] h-[48px]">
              <div class="absolute w-[70px] h-[1px] bg-black -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div id="top-left" class="absolute top-0 w-[50px] h-[50px] ">
              <div class="absolute w-[70px] h-[1px] bg-black rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div id="bottom-left" class="absolute bottom-0 w-[48px] h-[48px]">
              <div class="absolute w-[70px] h-[1px] bg-black -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div id="bottom-right" class="absolute bottom-0 w-[48px] h-[48px] ">
              <div class="absolute w-[70px] h-[1px] bg-black rotate-45 top-1/2 left-[120px] transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 relative">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 rotate-180 w-0 h-0 
                    border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-red-500"
                ></div>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 
                   border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-yellow-500"
                ></div>
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 w-0 h-0 
                    border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-green-500"
                ></div>
                <div
                  className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 w-0 h-0 
                   border-l-[48px] border-l-transparent border-r-[48px] border-r-transparent border-b-[48px] border-b-blue-300"
                ></div>
              </div>
            </div>
            {/* Casillas de la fila */}
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] top-8">
                <p className="mt-8 rotate-90">43</p>
                <p className="mb-8 ml-[19px] rotate-180">42</p>
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-red-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] top-8">
                <p className="mb-8 -rotate-180">26</p>
                <p className="mt-7 ml-[18px] -rotate-90">25</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black bg-green-500"></div>
              <div className="w-1/2 h-full border-[1px] border-black bg-blue-300"></div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] top-8">
                <p className="mb-7 rotate-90">59</p>
                <p className="mt-8 ml-[19px]">60</p>
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                <p className="flex mt-8">8</p>
                <p className="mb-8 ml-[28px] -rotate-90">9</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full border-[1px] border-black flex-col rotate-90 flex">
            {/*Casillas de la fila*/}
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                16
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-center">
                <Circle color={"bg-slate-300"} number={17} />
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                18
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                15
              </div>
              <div className="w-1/2 h-full bg-blue-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                19
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                14
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-blue-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                20
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                13
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-blue-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                21
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px] gap-1">
                <Circle color={"bg-slate-300"} />
                12
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-blue-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] gap-1 bg-blue-300">
                22
                <Circle />
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                11
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-blue-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                23
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2 rotate-180">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                10
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-blue-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                24
              </div>
            </div>
          </div>
        </div>
        {/*Tercera fila*/}
        <div className="flex flex-row w-full h-1/3">
          <div className="w-1/3 h-full border-[1px] border-black flex items-center justify-center">
            <Square borderColor="border-green-500" />
          </div>
          <div className="w-1/3 h-full border-[1px] border-black flex flex-col">
            {/*Casillas de la fila*/}
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                61
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                7
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                62
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                6
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px] gap-1">
                <Circle color={"bg-slate-300"} />
                63
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px] gap-1 bg-yellow-300">
                5
                <Circle />
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                64
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                4
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                65
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                3
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                66
              </div>
              <div className="w-1/2 h-full border-[1px] border-black bg-yellow-300"></div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                2
              </div>
            </div>
            <div className="flex flex-row w-full h-1/2">
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-end font-medium text-[12px]">
                67
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-center font-medium text-[12px] gap-1">
                <Circle color={"bg-slate-300"} number={68} />
              </div>
              <div className="w-1/2 h-full border-[1px] border-black flex items-center justify-start font-medium text-[12px]">
                1
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full border-[1px] border-black flex items-center justify-center">
            <Square borderColor="border-yellow-300" />
          </div>
        </div>
      </div>
      <div className="h-80 flex justify-center items-center pt-12 flex-col gap-6">
        <div className="w-28 h-20 flex items-center justify-center gap-4">
          {diceNumbers.map((diceNumbers, index) => (
            <img
              key={index}
              src={diceImages[diceNumbers]}
              alt={`Dado ${diceNumbers}`}
              className={`w-10 h-10 duration-2000 ${
                isRolling ? "animate-roll" : ""
              }`}
            />
          ))}
        </div>
        <div className="w-20 h-14 flex items-center justify-center">
          <button
            onClick={handleRollDice}
            className="bg-red-700 w-[68px] h-8 rounded-lg text-white hover:bg-red-400"
          >
            ¡A Jugar!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
