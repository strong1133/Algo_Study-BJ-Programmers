// #2023-12-28 :: 프로그래머스 - 최댓값 만들기(1)


function solution(numbers) {
  let answer = 0;
  numbers.sort((a,b)=>b-a)
  answer = numbers[0] * numbers[1]
  return answer;
}
console.log(solution([1,2,3,4,5]));
