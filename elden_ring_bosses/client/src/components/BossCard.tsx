import { Boss } from "@/lib/bosses";
import { Card } from "@/components/ui/card";
import { Flame, Shield, Zap, Sword } from "lucide-react";
import { getBossImage } from "@/lib/boss_images_map";

interface BossCardProps {
  boss: Boss;
  onClick?: () => void;
}

export function BossCard({ boss, onClick }: BossCardProps) {
  return (
    <Card
      className="boss-card cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
      onClick={onClick}
    >
      {/* Boss Image */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <img
          src={getBossImage(boss.id)}
          alt={boss.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-display text-primary mb-1">
              {boss.name}
            </h3>
            <p className="text-sm text-muted-foreground italic">{boss.title}</p>
          </div>
          <div className="difficulty-badge ml-4">{boss.difficulty}</div>
        </div>

        {/* Region and Type */}
        <div className="flex gap-3 mb-4">
          <span className="stat-label px-3 py-1 bg-secondary rounded">
            {boss.region}
          </span>
          <span className="stat-label px-3 py-1 bg-secondary rounded capitalize">
            {boss.bossType}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
          {boss.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          {/* Weaknesses */}
          <div>
            <div className="stat-label mb-2 flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Fraquezas
            </div>
            <div className="flex flex-wrap gap-1">
              {boss.weaknesses.map((w) => (
                <span
                  key={w}
                  className="text-xs px-2 py-1 bg-accent/20 text-accent rounded"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          {/* Resistances */}
          <div>
            <div className="stat-label mb-2 flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Resistências
            </div>
            <div className="flex flex-wrap gap-1">
              {boss.resistances.map((r) => (
                <span
                  key={r}
                  className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Drops Preview */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="stat-label mb-2 flex items-center gap-1">
            <Sword className="w-3 h-3" />
            Drops
          </div>
          <div className="flex flex-wrap gap-1">
            {boss.drops.slice(0, 2).map((d) => (
              <span key={d} className="text-xs px-2 py-1 bg-secondary rounded">
                {d}
              </span>
            ))}
            {boss.drops.length > 2 && (
              <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                +{boss.drops.length - 2} mais
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
