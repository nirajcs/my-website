/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const SkillCard = ({skills}) => {
  return (
    <>
      <div className="flex-col pb-10 h-full w-full overflow-y-auto">
        <div className="h-full grid gap-x-10 gap-y-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:overflow-hidden overflow-y-auto overflow-x-hidden">
            {skills?.map((skill) => (
            <div key={skill.name} className="group h-fit [perspective:1000px]">
              <div className="relative border-solid p-2 border-2 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face  */}
                <div className="inset-0 rounded-xl [backface-visibility:hidden]">
                  {skill.imageUrl && (
                    <img
                      className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                      src={skill.imageUrl}
                      alt={skill.name}
                      width={320}
                      height={320}
                    />
                  )}
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl overflow-x-auto bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="md:text-2xl text-sm font-bold mb-4">{skill.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

};

export default SkillCard;