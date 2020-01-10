module Main where
import Graphics.Implicit

main :: IO ()
main = threejs

vecs = [ (22,0) , (0,22) , (-22,0) , (0,-22)]

twist h = 35*(cos (h*2*pi/60))
-- vecs = zip [-22, 22] [0, 0] ++ zip [0, 0] [-22, 22]
circs =  fmap (`translate` (circle 10)  ) ( (0, 0) : vecs)
extrude c = extrudeRM 4
  (Right twist)
  (Left 1) -- scale
  (Left (0, 0)) -- translate
   c
  (Left 40)  -- height
  
ghcidrun =  writeSTL 10 "circsMike.stl" $ extrude $ unionR 8 circs
threejs =  do
  putStrLn "rendering for threejs"
  writeTHREEJS 2 "circsMike.js" $ extrude $ unionR 8 circs
